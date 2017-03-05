const it = Object.freeze({
  common: {
    remove: 'Rimuovere',
    cancel: 'Annulla'
  },
  auth: {
    login: {
      email: 'E-mail',
      password: 'Parola d\'ordine',
      loginButton: 'Accesso',
      goToSignUp: 'Non ha ancora registrato?',
      signUp: 'Registrazione',
      goToLogin: 'Ha già un account?'
    }
  },
  account: {
    title: 'Il suo profilo',
    tab: 'Profilo',
    random: 'Prendi la parola casuale',
    logout: 'Esci'
  },
  settings: {
    title: 'Impostazioni',
    enableNotifications: 'Consenti notifiche',
    repeat: 'Ripetere ogni',
    interval: {
      title: 'Periodo',
      notset: 'Non specificato',
      sing: {
        second: 'secondo',
        minute: 'minuto',
        hour: 'ora',
        day: 'giorno'
      },
      pl: {
        second: 'secondi',
        minute: 'minuti',
        hour: 'ore',
        day: 'giorni '
      }
    }
  },
  courses: {
    tab: '[IT] Courses',
    list: {
      title: '[IT] Your courses'
    }
  },
  words: {
    tab: 'Parole',
    list: {
      title: 'Le sue parole',
      removeMessage: 'Sei sicuro che vuoi rimuovere la parola "{{word}}"?'
    },
    form: {
      addTitle: 'Aggiungi una parola',
      editTitle: 'Modifica la parola',
      backButton: 'Indietro',
      done: 'Fine',
      wordLabel: 'Parola',
      wordPlaceholder: 'Si prega di inserire la parola ',
      translationLabel: 'Traduzione',
      translationPlaceholder: 'Si prega di inserire la traduzione',
      languageLabel: 'Lingua',
      languages: {
        de: 'Tedesco {{flag}}',
        ru: 'Russo {{flag}}',
        en: 'Inglese {{flag}}',
        it: 'Italiano {{flag}}',
        es: 'Spagnolo {{flag}}',
        fr: 'Francese {{flag}}'
      },
      addButton: 'Aggiungi',
      editButton: 'Salva'
    }
  }
});

export default it;
