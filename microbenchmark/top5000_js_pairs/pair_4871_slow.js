const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function () {},
          KEY_2: function () {},
          KEY_3: function () {},
          KEY_4: function (VAR_2, VAR_3, VAR_4) {
            this.VAR_5 = VAR_2;
            this.VAR_6 = VAR_3;
            this.VAR_7 = VAR_4;
          },
        };
        VAR_1.KEY_4.VAR_8 = VAR_1;
        var VAR_9 = new VAR_1.KEY_4(777, "str", {});
    }
};