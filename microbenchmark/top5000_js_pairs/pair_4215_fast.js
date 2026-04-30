const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1
            .split("")
            .map(function (VAR_4) {
              var VAR_5 = VAR_4.charCodeAt(),
                VAR_6 = VAR_5 - 13;
              if (VAR_6 < 65) VAR_6 = 90 - (65 % VAR_6) + 1;
              return VAR_5 >= 65 && VAR_5 <= 90 ? String.fromCharCode(VAR_6) : VAR_4;
            })
            .join("");
        }
        FUNCTION_1("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
    }
};