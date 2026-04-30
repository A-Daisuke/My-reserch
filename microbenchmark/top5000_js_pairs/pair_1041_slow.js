const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghij";
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        var VAR_2 = VAR_1
          .split("")
          .map(function (VAR_3) {
            return String.fromCharCode(VAR_3.charCodeAt(0) + 1);
          })
          .join("");
    }
};