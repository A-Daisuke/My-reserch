const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = -1;
        for (var VAR_3 = 0; VAR_3 < 300; VAR_3++) {
          VAR_1[++VAR_2] = "<tr><td>";
          VAR_1[++VAR_2] = "</td><td>";
          VAR_1[++VAR_2] = "</td><td>";
          VAR_1[++VAR_2] = "</td><td>";
          VAR_1[++VAR_2] = "</td><td>";
          VAR_1[++VAR_2] = "</td><td>";
          VAR_1[++VAR_2] = "</td><td>";
          VAR_1[++VAR_2] = "</td></tr>";
        }
        VAR_1.join();
    }
};