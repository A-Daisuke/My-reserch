const Benchmark = {
    run: function() {
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 65536; VAR_3++) {
          if (VAR_3 == 65535) VAR_2 += String.fromCharCode(VAR_3);
          else VAR_2 += String.fromCharCode(VAR_3, ++VAR_3);
        }
    }
};