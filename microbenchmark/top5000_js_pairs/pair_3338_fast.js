const Benchmark = {
    run: function() {
        let VAR_1 = [];
        let VAR_2;
        for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * 100));
        }
        VAR_1.sort(function (VAR_5, VAR_6) {
          if (VAR_5 === 0 && VAR_6 !== 0) {
            return -1;
          } else if (VAR_5 !== 0 && VAR_6 === 0) {
            return 1;
          } else {
            return VAR_6 - VAR_5;
          }
        });
    }
};