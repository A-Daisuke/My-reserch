const Benchmark = {
    run: function() {
        var VAR_7 = [
          "google.com",
          "www.google.com",
          "google.co",
          "www.google.co",
          "google.com.az",
          "www.google.com.az",
          "google.co.az",
          "www.google.co.az",
        ];
        VAR_2 = /^(.*\.)?(google)(\.com?)?(\.[a-z]{2})?$/;
        VAR_3 = /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2})$/;
        var VAR_8 = VAR_7.every(function (VAR_9) {
          return VAR_3.test(VAR_9);
        });
        if (!VAR_8) {
          for (var VAR_6 = 0; VAR_6 < 1000000; VAR_6++);
        }
    }
};