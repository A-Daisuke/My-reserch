const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: {
            KEY_2: {
              KEY_3: 0,
              KEY_4: function (VAR_2) {
                this.KEY_3 += VAR_2;
              },
            },
          },
        };
        var VAR_3 = VAR_1.KEY_1.KEY_2.KEY_4.bind(VAR_1.KEY_1.KEY_2);
        var VAR_4 = VAR_1.KEY_1.KEY_2.KEY_4;
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          VAR_4.call(VAR_1.KEY_1.KEY_2, VAR_5);
        }
    }
};