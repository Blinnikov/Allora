const en = Object.freeze({
  common: {
    remove: 'Remove',
    cancel: 'Cancel'
  },
  auth: {
    login: {
      email: 'Email Address',
      password: 'Password',
      loginButton: 'Login',
      goToSignUp: 'New here?',
      signUp: 'Sign Up',
      goToLogin: 'Do you already have an account?'
    }
  },
  account: {
    title: 'Account',
    tab: 'Account',
    random: 'Get random word',
    logout: 'Logout'
  },
  settings: {
    title: 'Settings',
    enableNotifications: 'Enable notifications',
    repeat: 'Repeat every',
    interval: {
      notset: 'Not set',
      sing: {
        second: 'second',
        minute: 'minute',
        hour: 'hour',
        day: 'day'
      },
      pl: {
        second: 'seconds',
        minute: 'minutes',
        hour: 'hours',
        day: 'days'
      }
    },
  },
  words: {
    tab: 'Words',
    list: {
      title: 'Your words',
      removeMessage: `Are you sure you want to remove '{{word}}'?`
    },
    form: {
      addTitle: 'Add new word',
      editTitle: 'Edit the word',
      backButton: 'Back',
      done: 'Done',
      wordLabel: 'Word',
      wordPlaceholder: 'Please enter the word',
      translationLabel: 'Translation',
      translationPlaceholder: 'And of course the translation',
      languageLabel: 'Language',
      languages: {
        de: 'German {{flag}}',
        ru: 'Russian {{flag}}',
        en: 'English {{flag}}',
        it: 'Italian {{flag}}',
        es: 'Spanish {{flag}}',
        fr: 'French {{flag}}'
      },
      addButton: 'Add',
      editButton: 'Save',
    }
  }
});

export default en;
