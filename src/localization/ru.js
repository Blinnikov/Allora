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
    tab: 'Профиль',
    logout: 'Выйти'
  },
  words: {
    tab: 'Слова',
    list: {
      title: 'Ваши слова',
      removeMessage: `Вы уверены, что хотите удалить '{{word}}'?`
    },
    form: {
      addTitle: 'Добавить слово',
      editTitle: 'Редактирование',
      backButton: 'Назад',
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
