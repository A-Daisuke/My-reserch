const Benchmark = {
    run: function() {
        var VAR_7 = {
          KEY_1: {
            KEY_2: function (VAR_8) {
              this.VAR_4 = (function () {
                return "You've enetered bad data: " + VAR_8;
              })();
            },
            KEY_3: { KEY_4: "A standard Message" },
          },
        };
        var VAR_9 = new VAR_7.KEY_1.KEY_2("badNumber")
          .VAR_4;
    }
};