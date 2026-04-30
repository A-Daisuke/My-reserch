const Benchmark = {
    run: function() {
        String.prototype.FUNCTION_1 = function () {
          var VAR_1 = this.charCodeAt(0);
          return VAR_1 >= 48 && VAR_1 <= 57;
        };
        var VAR_2 =
          "1234 04324 242948 242348923  4329843289 2324 2  24389423894 1114 89324 82  4238943294  14398319  4 81932379575 5 5 252     52749858274 9  5 274895 72  245789141 1 98 891 138 917195179 195137515  1875138571 87";
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < VAR_2.length; VAR_4++) {
          if (VAR_2[VAR_4].FUNCTION_1()) VAR_3.push(VAR_2[VAR_4]);
        }
        var VAR_5 = VAR_3.join("");
    }
};