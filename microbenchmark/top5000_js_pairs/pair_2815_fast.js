const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (!!Number(VAR_1) === false) {
            console.log("not a valid height");
            return;
          }
          let VAR_2 = "";
          const VAR_5 = "_";
          for (let VAR_3 = VAR_1; VAR_3 >= 1; VAR_3--) {
            VAR_2 += VAR_5.repeat(VAR_3 - 1);
            VAR_2 += String(VAR_3).repeat((VAR_1 - VAR_3) * 2 + 1);
            VAR_2 += VAR_5.repeat(VAR_3 - 1);
            VAR_2 += "\n";
          }
          console.log(VAR_2);
        }
        FUNCTION_1(50);
    }
};