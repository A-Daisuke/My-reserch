const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (!!Number(VAR_1) === false) {
            console.log("not a valid height");
            return;
          }
          let VAR_2 = "";
          for (let VAR_3 = VAR_1; VAR_3 >= 1; VAR_3--) {
            for (let VAR_4 = 1; VAR_4 < VAR_1 * 2; VAR_4++) {
              if (VAR_4 < VAR_3 || VAR_4 > VAR_1 * 2 - VAR_3) {
                VAR_2 += "_";
              } else {
                VAR_2 += VAR_3;
              }
            }
            VAR_2 += "\n";
          }
          console.log(VAR_2);
        }
        FUNCTION_1(50);
    }
};