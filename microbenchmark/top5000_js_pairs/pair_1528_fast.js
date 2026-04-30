const Benchmark = {
    run: function() {
        var VAR_1 = ["<td class='", "", "'>cell ", 0, "</td>"];
        var VAR_6 = "";
        VAR_6 += "<table>";
        for (var VAR_3 = 0; VAR_3 < 200; VAR_3++) {
          VAR_6 += "<tr class='" + (VAR_3 % 2 == 0 ? "c1" : "c2") + "'>";
          for (var VAR_4 = 0; VAR_4 < 15; VAR_4++) {
            VAR_6 +=
              "<td class='" + (VAR_4 % 2 == 0 ? "c1" : "c2") + "'>" + "cell " + VAR_3 + "</td>";
          }
          VAR_6 += "</tr>";
        }
        VAR_6 += "</table>";
    }
};