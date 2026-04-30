const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = "";
          for (var VAR_3 in VAR_1) {
            if (VAR_1.charCodeAt(VAR_3) < 65 || VAR_1.charCodeAt(VAR_3) > 91) {
              VAR_2 += VAR_1[VAR_3];
              continue;
            }
            if (VAR_1.charCodeAt(VAR_3) < 78) {
              VAR_2 += String.fromCharCode(VAR_1.charCodeAt(VAR_3) + 13);
            } else {
              VAR_2 += String.fromCharCode(VAR_1.charCodeAt(VAR_3) - 13);
            }
          }
          return VAR_2;
        }
        FUNCTION_1("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
    }
};