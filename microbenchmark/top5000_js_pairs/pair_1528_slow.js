const Benchmark = {
    run: function() {
        var VAR_1 = ["<td class='", "", "'>cell ", 0, "</td>"];
        var VAR_2 = [];
        VAR_2.push("<table>");
        for (var VAR_3 = 0; VAR_3 < 200; VAR_3++) {
          VAR_2.push("<tr class='", VAR_3 % 2 == 0 ? "c1" : "c2", "'>");
          for (var VAR_4 = 0; VAR_4 < 15; VAR_4++) {
            VAR_2.push("<td class='", VAR_4 % 2 == 0 ? "c1" : "c2", "'>", "cell " + VAR_3, "</td>");
          }
          VAR_2.push("</tr>");
        }
        VAR_2.push("</table>");
        var VAR_5 = VAR_2.join("");
    }
};