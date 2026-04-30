const Benchmark = {
    run: function() {
        !(function () {
          function FUNCTION_1() {
            (this.VAR_1 = !1), (this.VAR_2 = !1);
          }
          var VAR_3 = new FUNCTION_1(),
            VAR_4 = FUNCTION_1.prototype;
          (VAR_4.FUNCTION_2 = function () {
            (this.VAR_1 = !0), console.log("Your car is driving...");
          }),
            (VAR_4.FUNCTION_3 = function () {
              (this.VAR_2 = !0), console.log("Your car is honking...");
            }),
            VAR_3.FUNCTION_3(),
            VAR_3.FUNCTION_2();
        })();
    }
};