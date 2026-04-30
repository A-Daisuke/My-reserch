const Benchmark = {
    run: function() {
        let VAR_3 = { KEY_4: 3 };
        let VAR_5 = {
          KEY_5: function () {
            return 3;
          },
          KEY_6: function (VAR_1) {
            return 3;
          },
        };
        VAR_5.KEY_6(4);
        let VAR_6 = VAR_5.KEY_5();
    }
};