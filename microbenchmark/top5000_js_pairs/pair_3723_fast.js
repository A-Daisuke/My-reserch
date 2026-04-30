const Benchmark = {
    run: function() {
        !(function () {
          var VAR_5 = {
              KEY_1: !1,
              KEY_2: !1,
              KEY_3: function () {
                (this.KEY_1 = !0), console.log("Your car is driving...");
              },
              KEY_4: function () {
                (this.KEY_2 = !0), console.log("Your car is honking...");
              },
            },
            VAR_6 = VAR_5;
          VAR_6.KEY_4(), VAR_6.KEY_3();
        })();
    }
};