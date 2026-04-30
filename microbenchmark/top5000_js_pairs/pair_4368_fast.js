const Benchmark = {
    run: function() {
        var VAR_4 = {
          KEY_3() {
            let VAR_1 = 2;
            return VAR_1;
          },
        };
        var VAR_5 = Object.assign(VAR_4, {
          KEY_4() {
            let VAR_2 = 1;
          },
        });
        VAR_5.KEY_3();
    }
};