const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        try {
          throw undefined;
        } catch (VAR_2) {
          VAR_2 = 0;
          for (; VAR_2 < VAR_1.length; ++VAR_2) {
            try {
              throw undefined;
            } catch (VAR_3) {
              VAR_3 = VAR_2;
              try {
                console.log(VAR_1[VAR_3]);
              } finally {
                VAR_2 = VAR_3;
              }
            }
          }
        }
    }
};