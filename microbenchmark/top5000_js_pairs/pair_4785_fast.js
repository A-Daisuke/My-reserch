const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_5 = {
          KEY_1: "this is property",
          KEY_2: 0,
          KEY_3: function () {
            return this.KEY_1;
          },
          KEY_4: function (VAR_6) {
            this.KEY_1 = VAR_6;
          },
          KEY_5: function () {
            this.KEY_2++;
          },
        };
        VAR_5.KEY_4("this is another value");
        VAR_1 = VAR_5.KEY_3();
        VAR_5.KEY_5();
    }
};