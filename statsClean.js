window.addEventListener("load", () => {
    const lastClearTime = localStorage.getItem("lastClearTime");
    const now = new Date();
    if (lastClearTime === null || now.getTime() - Number(lastClearTime) >= 7 * 24 * 60 * 60 * 1000) {
      localStorage.setItem("zamanTutucuPazartesiVerisi",0)
      localStorage.setItem("zamanTutucuSaliVerisi",0)
      localStorage.setItem("zamanTutucuCarsambaVerisi",0)
      localStorage.setItem("zamanTutucuPersembeVerisi",0)
      localStorage.setItem("zamanTutucuCumaVerisi",0)
      localStorage.setItem("zamanTutucuCumartesiVerisi",0)
      localStorage.setItem("zamanTutucuPazarVerisi",0)
      localStorage.setItem("pomodoroPazartesiVerisi",0)
      localStorage.setItem("pomodoroSaliVerisi",0)
      localStorage.setItem("pomodoroCarsambaVerisi",0)
      localStorage.setItem("pomodoroPersembeVerisi",0)
      localStorage.setItem("pomodoroCumaVerisi",0)
      localStorage.setItem("pomodoroCumartesiVerisi",0)
      localStorage.setItem("pomodoroPazarVerisi",0)
      localStorage.setItem("soruKaydetmePazartesiVerisi",0)
      localStorage.setItem("soruKaydetmeSaliVerisi",0)
      localStorage.setItem("soruKaydetmeCarsambaVerisi",0)
      localStorage.setItem("soruKaydetmePersembeVerisi",0)
      localStorage.setItem("soruKaydetmeCumaVerisi",0)
      localStorage.setItem("soruKaydetmeCumartesiVerisi",0)
      localStorage.setItem("soruKaydetmePazarVerisi",0)
      localStorage.setItem("gunlukPazartesiVerisi",0)
      localStorage.setItem("gunlukSaliVerisi",0)
      localStorage.setItem("gunlukCarsambaVerisi",0)
      localStorage.setItem("gunlukPersembeVerisi",0)
      localStorage.setItem("gunlukCumaVerisi",0)
      localStorage.setItem("gunlukCumartesiVerisi",0)
      localStorage.setItem("gunlukPazarVerisi",0)
      localStorage.setItem("lastClearTime", now.getTime());
    }
 });