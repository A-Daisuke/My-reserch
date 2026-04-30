const Benchmark = {
    run: function() {
        let VAR_1 = [0, 123, -123, 10000000, 999987654, 101010101, 1463847413];
        VAR_1.map((VAR_2) => {
          let VAR_3 = VAR_2.toString().split("").reverse();
          let VAR_4 = "";
          if (VAR_2 < 0) VAR_4 = VAR_3.pop();
          let VAR_5 = parseInt([VAR_4, ...VAR_3].join(""));
          if (VAR_5 > Math.pow(2, 31) - 1 || VAR_5 < Math.pow(-2, 31)) return 0;
          return VAR_5;
        });
    }
};