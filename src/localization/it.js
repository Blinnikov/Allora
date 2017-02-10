const it = Object.freeze({
  common: {
    remove: '[IT] Remove',
    cancel: '[IT] Cancel'
  },
  auth: {
    login: {
      email: '[IT] Email Address',
      password: '[IT] Password',
      loginButton: '[IT] Login',
      goToSignUp: '[IT] New here?',
      signUp: '[IT] Sign Up',
      goToLogin: '[IT] Do you already have an account?'
    }
  },
  account: {
    title: '[IT] Account',
    tab: '[IT] Account',
    random: '[IT] Get random word',
    logout: '[IT] Logout'
  },
  settings: {
    title: '[IT] Settings',
    enableNotifications: '[IT] Enable notifications',
    repeat: '[IT] Repeat every',
    interval: {
      title: '[IT] Interval Settings',
      notset: '[IT] Not set',
      sing: {
        second: '[IT] second',
        minute: '[IT] minute',
        hour: '[IT] hour',
        day: '[IT] day'
      },
      pl: {
        second: '[IT] seconds',
        minute: '[IT] minutes',
        hour: '[IT] hours',
        day: '[IT] days'
      }
    },
  },
  words: {
    tab: 'Parole',
    list: {
      title: 'Le tue parole',
      removeMessage: 'Sei sicuro che vuoi rimuovere la parola "{{word}}"?'
    },
    form: {
      addTitle: '[IT] Add new word',
      editTitle: '[IT] Edit the word',
      backButton: '[IT] Back',
      done: 'Fine',
      wordLabel: '[IT] Word',
      wordPlaceholder: '[IT] Please enter the word',
      translationLabel: '[IT] Translation',
      translationPlaceholder: '[IT] And of course the translation',
      languageLabel: '[IT] Language',
      languages: {
        de: '[IT] German {{flag}}',
        ru: '[IT] Russian {{flag}}',
        en: '[IT] English {{flag}}',
        it: '[IT] Italian {{flag}}',
        es: '[IT] Spanish {{flag}}',
        fr: '[IT] French {{flag}}'
      },
      addButton: '[IT] Add',
      editButton: '[IT] Save',
    }
  }
});

export default it;
