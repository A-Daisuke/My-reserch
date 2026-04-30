const Benchmark = {
    run: function() {
        var VAR_1 = [
          "www.google",
          "google",
          "wgoogle.com",
          "googlew.com",
          "wgoogle.co",
          "googlew.co",
          "wgoogle.c",
          "googlew.c",
          "wgoogle.com.az",
          "googlew.com.az",
          "wgoogle.co.az",
          "googlew.co.az",
        ];
        VAR_2 = /^(.*\.)?(google)(\.com?)?(\.[a-z]{2})?$/;
        VAR_3 = /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2})$/;
        var VAR_4 = VAR_1.every(function (VAR_5) {
          return !VAR_2.test(VAR_5);
        });
        if (!VAR_4) {
          for (var VAR_6 = 0; VAR_6 < 1000000; VAR_6++);
        }
    }
};