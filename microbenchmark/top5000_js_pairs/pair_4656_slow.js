const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          let VAR_2 = 0;
          for (let VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
            const VAR_4 = VAR_1.slice(VAR_3);
            for (let VAR_5 = 0; VAR_5 < VAR_4.length; VAR_5++) {
              const VAR_6 = VAR_4.slice(VAR_5);
              const VAR_7 = `^${VAR_6}`;
              const VAR_8 = VAR_1.search(VAR_7);
              if (VAR_8 !== -1) {
                VAR_2 += VAR_6.length;
                break;
              }
            }
          }
          return VAR_2;
        }
        FUNCTION_1("ababaa");
    }
};