const Benchmark = {
    run: function() {
        var VAR_1 = Array(10001).join("word  ");
        var VAR_2;
        function FUNCTION_1(VAR_3, VAR_4) {
          if (VAR_3 !== VAR_4) {
            console.log(
              "Assertion Error: Expected <" + VAR_3 + "> but found <" + VAR_4 + ">.",
            );
          }
        }
        VAR_2 = 0;
        for (var VAR_5 = 0; VAR_5 < VAR_1.length; VAR_5++) {
          if (VAR_1[VAR_5] == " ") {
            VAR_2++;
            while (VAR_1[VAR_5] == " ") {
              VAR_5++;
              if (VAR_5 >= VAR_1.length) {
                break;
              }
            }
          }
        }
        FUNCTION_1(10000, VAR_2);
    }
};