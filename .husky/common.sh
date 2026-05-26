# Bootstrap PATH for git hooks (GitHub Desktop, Xcode, etc. use a minimal PATH).
# POSIX sh — do not require bash or sourcing slow profile scripts.

prepend_path() {
  case ":${PATH}:" in
    *":$1:"*) ;;
    *) PATH="$1:${PATH}" ;;
  esac
}

export PATH="${PATH:-}"

prepend_path /opt/homebrew/bin
prepend_path /usr/local/bin

# Volta, fnm, asdf (common macOS installs)
[ -d "${HOME}/.volta/bin" ] && prepend_path "${HOME}/.volta/bin"
[ -d "${HOME}/.local/share/fnm/current/bin" ] && prepend_path "${HOME}/.local/share/fnm/current/bin"
if [ -d "${HOME}/.asdf/shims" ]; then
  prepend_path "${HOME}/.asdf/shims"
  prepend_path "${HOME}/.asdf/bin"
fi

# nvm: avoid sourcing nvm.sh (bash-oriented); add matching version bin to PATH
_nvm_dir="${NVM_DIR:-${HOME}/.nvm}"
if [ -d "${_nvm_dir}/versions/node" ]; then
  _repo_root="$(git rev-parse --show-toplevel 2>/dev/null)" || _repo_root="$(pwd)"
  _nvm_added=0

  if [ -f "${_repo_root}/.nvmrc" ]; then
    _ver="$(sed 's/^[[:space:]]*//;s/[[:space:]]*$//;s/^v//' "${_repo_root}/.nvmrc" 2>/dev/null)"
    for _d in "${_nvm_dir}/versions/node"/v"${_ver}"*; do
      if [ -x "${_d}/bin/npm" ]; then
        prepend_path "${_d}/bin"
        _nvm_added=1
        break
      fi
    done
  fi

  if [ "${_nvm_added}" -eq 0 ] && [ -f "${_nvm_dir}/alias/default" ]; then
    _def="$(tr -d '[:space:]' < "${_nvm_dir}/alias/default")"
    if [ -n "${_def}" ] && [ -x "${_nvm_dir}/versions/node/${_def}/bin/npm" ]; then
      prepend_path "${_nvm_dir}/versions/node/${_def}/bin"
      _nvm_added=1
    fi
  fi

  if [ "${_nvm_added}" -eq 0 ]; then
    for _d in "${_nvm_dir}/versions/node"/v*/bin; do
      if [ -x "${_d}/npm" ]; then
        prepend_path "${_d}"
        break
      fi
    done
  fi
fi

export PATH
