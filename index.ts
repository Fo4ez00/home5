interface Calculator {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
    multiply: (x: number, y: number) => number;
    divide: (x: number, y: number) => number;
  }
  
  class BasicCalculator implements Calculator {
    add(x: number, y: number): number {
      return x + y;
    }
  
    subtract(x: number, y: number): number {
      return x - y;
    }
  
    multiply(x: number, y: number): number {
      return x * y;
    }
  
    divide(x: number, y: number): number {
      if (y !== 0) {
        return x / y;
      } else {
        throw new Error("Нельзя делить на 0");
      }
    }
  }
  
  function calculate(calc: Calculator, operation: string, x: number, y: number): number | undefined {
    if (operation === 'add') {
      return calc.add(x, y);
    } else if (operation === 'subtract') {
      return calc.subtract(x, y);
    } else if (operation === 'multiply') {
      return calc.multiply(x, y);
    } else if (operation === 'divide') {
      return calc.divide(x, y);
    } else {
      console.error('Непонятная операция');
      return undefined;
    }
  }







 
  
interface Book {
    id: number;
    title: string;
    authorId: number;
  }
  

  interface Author {
    id: number;
    name: string;
  }
  
 
  interface BookService {
    books: Book[];
    getBookById(id: number): Book | undefined;
    getBooksByAuthor(authorId: number): Book[];
    getAuthorById(id: number): Author | undefined;
   
  }
  
  
  const bookService: BookService = {
    books: [
    { id: 1, title: 'Книга 1', authorId: 1 },
    { id: 2, title: 'Книга 2', authorId: 2 },
    { id: 3, title: 'Книга 3', authorId: 1 },
    ],
    getBookById(id: number): Book | undefined {
      return this.books.find((book) => book.id === id);
    },
    getBooksByAuthor(authorId: number): Book[] {
      return this.books.filter((book) => book.author.id === authorId);
    },
    getAuthorById(id: number): Author | undefined {
      return this.books
        .map((book) => book.author)
        .find((author) => author.id === id);
    },
  };

  