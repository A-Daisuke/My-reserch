const Benchmark = {
    run: function() {
        let VAR_1 = [0, 123, -123, 10000000, 999987654, 101010101, 1463847413];
        VAR_1.map((VAR_2) => {
          let VAR_4 = 0;
          let VAR_6 = false;
          if (VAR_2 < 0) {
            VAR_6 = true;
            VAR_2 = Math.abs(VAR_2);
          }
          if (VAR_2 === 0) return 0;
          while (true) {
            if (VAR_2 <= 0) {
              break;
            }
            VAR_4 = VAR_4 * 10;
            let VAR_7 = VAR_2 % 10;
            VAR_4 = VAR_4 + VAR_7;
            VAR_2 = ~~(VAR_2 / 10);
          }
          if (VAR_6) return 0 - VAR_4;
          if (VAR_4 > Math.pow(2, 31) - 1 || VAR_4 < Math.pow(-2, 31)) return 0;
          return VAR_4;
        });
    }
};