const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          let VAR_2 = 0;
          for (let VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
            const VAR_4 = VAR_1.slice(VAR_3);
            if (VAR_1 === VAR_4) {
              VAR_2 += VAR_4.length;
              continue;
            }
            for (let VAR_5 = 0; VAR_5 < VAR_4.length; VAR_5++) {
              if (VAR_1.charAt(VAR_5) === VAR_4.charAt(VAR_5)) {
                VAR_2++;
              } else {
                break;
              }
            }
          }
          return VAR_2;
        }
        FUNCTION_1("ababaa");
    }
};