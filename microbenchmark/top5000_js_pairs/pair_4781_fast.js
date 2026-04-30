const Benchmark = {
    run: function() {
        let VAR_1 = [0, 123, -123, 10000000, 999987654, 101010101, 1463847413];
        VAR_1.map((VAR_2) => {
          let VAR_4 = 0;
          while (VAR_2) {
            VAR_4 *= 10;
            VAR_4 += VAR_2 % 10;
            VAR_2 = ~~(VAR_2 / 10);
          }
          if (VAR_4 > Math.pow(2, 31) - 1 || VAR_4 < Math.pow(-2, 31)) return 0;
          return VAR_4;
        });
    }
};