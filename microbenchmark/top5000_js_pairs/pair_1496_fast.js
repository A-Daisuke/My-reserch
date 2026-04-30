const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = [],
          VAR_3 = [];
        while (VAR_1 < 10000) {
          VAR_2.push({
            KEY_1: VAR_1,
            KEY_2: "object-" + VAR_1,
          });
          VAR_1++;
        }
        FUNCTION_1.VAR_4 = {
          KEY_3: function () {
            return this.KEY_1;
          },
          KEY_4: function () {
            return this.KEY_2;
          },
        };
        function FUNCTION_1(VAR_5, VAR_6) {
          this.KEY_1 = VAR_5;
          this.KEY_2 = VAR_6;
        }
        var VAR_7 = 0;
        while (VAR_7 < VAR_2.length) {
          VAR_3.push({
            KEY_5: VAR_2[VAR_7].KEY_1,
            KEY_6: VAR_2[VAR_7].KEY_2,
          });
          VAR_7++;
        }
    }
};