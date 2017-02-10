const ru = Object.freeze({
  common: {
    remove: 'Удалить',
    cancel: 'Отмена'
  },
  auth: {
    login: {
      email: 'E-mail',
      password: 'Пароль',
      loginButton: 'Войти',
      goToSignUp: 'Впервые здесь?',
      signUp: 'Регистрация',
      goToLogin: 'Уже есть аккаунт?'
    }
  },
  account: {
    title: '[RU] Account',
    tab: 'Профиль',
    random: '[RU] Get random word',
    logout: 'Выйти'
  },
  settings: {
    title: '[RU] Settings',
    enableNotifications: '[RU] Enable notifications',
    repeat: '[RU] Repeat every',
    interval: {
      title: '[RU] Interval Settings',
      notset: '[RU] Not set',
      sing: {
        second: '[RU] second',
        minute: '[RU] minute',
        hour: '[RU] hour',
        day: '[RU] day'
      },
      pl: {
        second: '[RU] seconds',
        minute: '[RU] minutes',
        hour: '[RU] hours',
        day: '[RU] days'
      }
    },
  },
  words: {
    tab: 'Слова',
    list: {
      title: 'Ваши слова',
      removeMessage: 'Вы уверены, что хотите удалить "{{word}}"?'
    },
    form: {
      addTitle: 'Добавить слово',
      editTitle: 'Редактирование',
      backButton: 'Назад',
      done: 'Готово',
      wordLabel: 'Слово',
      wordPlaceholder: 'Пожалуйста введите слово',
      translationLabel: 'Перевод',
      translationPlaceholder: 'И его перевод',
      languageLabel: 'Язык',
      languages: {
        de: 'Немецкий {{flag}}',
        ru: 'Русский {{flag}}',
        en: 'Английский {{flag}}',
        it: 'Итальянский {{flag}}',
        es: 'Испанский {{flag}}',
        fr: 'Французский {{flag}}'
      },
      addButton: 'Добавить',
      editButton: 'Обновить',
    }
  }
});

export default ru;
