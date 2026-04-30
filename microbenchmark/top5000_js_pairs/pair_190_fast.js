const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "lsh" };
        var VAR_2;
        var VAR_3 = {
          KEY_2: "&",
          KEY_3: "|",
          KEY_4: "^",
          KEY_5: ">>",
          KEY_6: ">>>",
          KEY_7: "<<",
        };
        for (var VAR_4 = 0; VAR_4 < 1000000; VAR_4++) {
          switch (VAR_1.KEY_1) {
            case "and":
              if (!VAR_2) VAR_2 = "&";
            case "or":
              if (!VAR_2) VAR_2 = "|";
            case "xor":
              if (!VAR_2) VAR_2 = "^";
            case "rsh":
              if (!VAR_2) VAR_2 = ">>";
            case "ursh":
              if (!VAR_2) VAR_2 = ">>>";
            case "lsh":
              if (!VAR_2) VAR_2 = "<<";
          }
        }
    }
};