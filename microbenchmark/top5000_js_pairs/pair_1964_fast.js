const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 1000; ++VAR_2) {
          VAR_1.push(VAR_2);
        }
        let VAR_3 = [];
        VAR_1.forEach(function (VAR_5) {
          switch (VAR_5 % 3) {
            case 0:
              VAR_3.push("fizz");
              break;
            case 1:
              break;
            case 2:
              VAR_3.push(VAR_5 - 2);
              VAR_3.push(VAR_5 - 1);
              break;
          }
        });
    }
};