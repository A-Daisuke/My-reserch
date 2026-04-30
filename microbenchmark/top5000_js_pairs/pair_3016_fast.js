const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        for (var VAR_6 = 0; VAR_6 < VAR_2; VAR_6++) {
          VAR_1.push({
            KEY_1: "BLAH blah 21",
            KEY_2: function () {
              return this.KEY_1;
            },
            KEY_3: function (VAR_5) {
              this.KEY_1 = VAR_5;
            },
          });
        }
    }
};