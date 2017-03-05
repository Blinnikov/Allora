const ru = Object.freeze({
  common: {
    remove: 'Удалить',
    cancel: 'Отмена',
  },
  auth: {
    login: {
      email: 'E-mail',
      password: 'Пароль',
      loginButton: 'Войти',
      goToSignUp: 'Впервые здесь?',
      signUp: 'Регистрация',
      goToLogin: 'Уже есть аккаунт?',
    },
  },
  account: {
    title: 'Ваш профиль',
    tab: 'Профиль',
    random: 'Выбрать случайное слово',
    logout: 'Выйти',
  },
  settings: {
    title: 'Настройки',
    enableNotifications: 'Включить уведомления',
    repeat: 'Повторять каждые',
    interval: {
      title: 'Период уведомлений',
      notset: 'Не задано',
      sing: {
        second: 'секунда',
        minute: 'минута',
        hour: 'час',
        day: 'день',
      },
      pl: {
        second: 'секунд',
        minute: 'минут',
        hour: 'часов',
        day: 'дней',
      },
    },
  },
  courses: {
    tab: '[RU] Courses',
    list: {
      title: '[RU] Your courses',
    },
  },
  words: {
    tab: 'Слова',
    list: {
      title: 'Ваши слова',
      removeMessage: 'Вы уверены, что хотите удалить "{{word}}"?',
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
        fr: 'Французский {{flag}}',
      },
      addButton: 'Добавить',
      editButton: 'Обновить',
    },
  },
});

export default ru;
