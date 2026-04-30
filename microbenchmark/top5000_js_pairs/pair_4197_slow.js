const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = VAR_1;
        }
        Object.defineProperty(FUNCTION_1.prototype, "x", {
          KEY_1: function () {
            return this.VAR_2;
          },
          KEY_2: function (VAR_3) {
            this.VAR_2 = VAR_3;
          },
          KEY_3: true,
          KEY_4: true,
        });
        var VAR_4 = new FUNCTION_1(Math.random());
        for (var VAR_5 = 0; VAR_5 < 5000; ++VAR_5) {
          var VAR_6 = VAR_4.VAR_1;
        }
    }
};