function remainder(n, m){ 
    if (n < m){
      return m % n
    } else if (m < n){
      return n % m
    } else if ( n == 0 || m == 0){
      return NaN
    } else if (n == m || m == n){
      return n % m
    } else {
      return n / m 
    }
    
  }