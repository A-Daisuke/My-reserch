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
        VAR_2 = VAR_1.match(/\S+/g).length;
        FUNCTION_1(10000, VAR_2);
    }
};