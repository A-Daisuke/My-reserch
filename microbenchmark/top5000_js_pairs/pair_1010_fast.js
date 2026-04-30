const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2 % 100);
        }
        var VAR_3 = [3, 25, 78];
        for (var VAR_5 = 0; VAR_5 < VAR_3.length - 1; VAR_5++) {
          var VAR_6 = VAR_1.length - 1;
          while (VAR_6 >= 0) {
            if (VAR_1[VAR_6] !== VAR_3[VAR_5]) {
              VAR_6--;
            } else {
              VAR_1.splice(VAR_6, 1);
            }
          }
        }
    }
};