const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return (
            VAR_1.charCodeAt(0) === 105 &&
            VAR_1.charCodeAt(1) === 110 &&
            VAR_1.charCodeAt(2) === 32 &&
            VAR_1.charCodeAt(3) === 118 &&
            VAR_1.charCodeAt(4) === 97 &&
            VAR_1.charCodeAt(5) === 108 &&
            VAR_1.charCodeAt(6) === 117
          );
        }
        VAR_2 = "in value";
        VAR_3 = "of value";
        var VAR_4 = 100;
        while (--VAR_4 !== 0) {
          FUNCTION_1(VAR_2);
          FUNCTION_1(VAR_3);
        }
    }
};