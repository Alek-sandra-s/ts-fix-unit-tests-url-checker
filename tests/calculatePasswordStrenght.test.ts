import { calculatePasswordStrength } from '../src/calculatePasswordStrength'

describe('Password strength is very weak', () => {
  test('Check when password length less than 8 and contains digits, password strength is very weak', () => {
    expect(calculatePasswordStrength('1234567')).toBe('Very Weak')
  })
  test('Check when password length less than 8 and contains upper case, password strength is very weak', () => {
    expect(calculatePasswordStrength('ABCDEFG')).toBe('Very Weak')
  })
  test('Check when password length less than 8 and contains lower case, password strength is very weak', () => {
    expect(calculatePasswordStrength('abcdefg')).toBe('Very Weak')
  })
  test('Check when password length less than 8 and contains special characters, password strength is very weak', () => {
    expect(calculatePasswordStrength('!!!!!!!')).toBe('Very Weak')
  })
  test('Check when password length equals 8 and contains digits, password strength is very weak', () => {
    expect(calculatePasswordStrength('12345678')).toBe('Very Weak')
  })
  test('Check when password length equals 8 and contains lower case, password strength is very weak', () => {
    expect(calculatePasswordStrength('abcdefgh')).toBe('Very Weak')
  })
  test('Check when password length equals 8 and contains upper case, password strength is very weak', () => {
    expect(calculatePasswordStrength('ABCDEFGH')).toBe('Very Weak')
  })
  test('Check when password length equals 8 and contains special characters, password strength is very weak', () => {
    expect(calculatePasswordStrength('abcdefgh')).toBe('Very Weak')
  })
  test('Check when password length less than 8 and contains digits and lower case, password strength is very weak', () => {
    expect(calculatePasswordStrength('1234abc')).toBe('Very Weak')
  })
  test('Check when password length less than 8 and contains digits and upper case, password strength is very weak', () => {
    expect(calculatePasswordStrength('1234ABC')).toBe('Very Weak')
  })
  test('Check when password length less than 8 and contains digits and special characters, password strength is very weak', () => {
    expect(calculatePasswordStrength('123456!')).toBe('Very Weak')
  })
  test('Check when password length is between 9 and 11 and contains digits, password strength is very weak', () => {
    expect(calculatePasswordStrength('12345678901')).toBe('Very Weak')
  })
  test('Check when password length is between 9 and 11 and contains upper case, password strength is very weak', () => {
    expect(calculatePasswordStrength('ABCDEFGHIJ')).toBe('Very Weak')
  })
  test('Check when password length is between 9 and 11 and contains lower case, password strength is very weak', () => {
    expect(calculatePasswordStrength('abcdefghij')).toBe('Very Weak')
  })
  test('Check when password length is between 9 and 11 and contains special characters, password strength is very weak', () => {
    expect(calculatePasswordStrength('!!!!!!!!!!!')).toBe('Very Weak')
  })
})

describe('Password strength is weak', () => {
  test('Check when password length is equal 12 and contains digits, password strength is weak', () => {
    expect(calculatePasswordStrength('123456789012')).toBe('Weak')
  })
  test('Check when password length is equal 12 and contains upper case, password strength is weak', () => {
    expect(calculatePasswordStrength('ABCDEFGHIJKL')).toBe('Weak')
  })
  test('Check when password length is equal 12 and contains lower case, password strength is weak', () => {
    expect(calculatePasswordStrength('abcdefghijkl')).toBe('Weak')
  })
  test('Check when password length is equal 12 and contains special characters, password strength is weak', () => {
    expect(calculatePasswordStrength('!!!!!!!!!!!!')).toBe('Weak')
  })
  test('Check when password length is more than 12 and contains digits, password strength is weak', () => {
    expect(calculatePasswordStrength('1234567890123')).toBe('Weak')
  })
  test('Check when password length is more than 12 and contains lower case, password strength is weak', () => {
    expect(calculatePasswordStrength('abcdefghijklm')).toBe('Weak')
  })
  test('Check when password length is more than 12 and contains upper case, password strength is weak', () => {
    expect(calculatePasswordStrength('ABCDEFGHIJKLM')).toBe('Weak')
  })
  test('Check when password length is more than 12 and contains special characters, password strength is weak', () => {
    expect(calculatePasswordStrength('!!!!!!!!!!!!!')).toBe('Weak')
  })
  test('Check when password length is equal 8 digits and contains upper and lower case, password strength is weak', () => {
    expect(calculatePasswordStrength('ABCDefgh')).toBe('Weak')
  })
  test('Check when password length is between 9 and 11 and contains upper and lower case, password strength is weak', () => {
    expect(calculatePasswordStrength('ABCDefghij')).toBe('Weak')
  })
  test('Check when password length is between 9 and 11 and contains digits and lower case, password strength is weak', () => {
    expect(calculatePasswordStrength('1234efghij')).toBe('Weak')
  })
  test('Check when password length is between 9 and 11 and contains digits and upper case, password strength is weak', () => {
    expect(calculatePasswordStrength('ABCDEFGH12')).toBe('Weak')
  })
  test('Check when password length is between 9 and 11 and contains digits and special characters, password strength is weak', () => {
    expect(calculatePasswordStrength('123456789!')).toBe('Weak')
  })
  test('Check when password length is equal 8 and contains special characters and lower case, password strength is weak', () => {
    expect(calculatePasswordStrength('abcdefg!')).toBe('Weak')
  })
  test('Check when password length is equal 8 and contains special characters and upper case, password strength is weak', () => {
    expect(calculatePasswordStrength('ABCDEFG!')).toBe('Weak')
  })
  test('Check when password length is equal 8 and contains special characters and lower case, password strength is weak', () => {
    expect(calculatePasswordStrength('abcdefg!')).toBe('Weak')
  })
  test('Check when password length is equal 8 and contains special characters and digits, password strength is weak', () => {
    expect(calculatePasswordStrength('1234567!')).toBe('Weak')
  })
  test('Check when password length is less than 8, contains special characters and upper and lower case, password strength is weak', () => {
    expect(calculatePasswordStrength('Abcefg!')).toBe('Weak')
  })
})

describe('Password strength is moderate', () => {
  test('Check when password length is equal 8, contains special characters and upper and lower case, password strength is moderate', () => {
    expect(calculatePasswordStrength('Abcdefg!')).toBe('Moderate')
  })
  test('Check when password length is less than 8, contains digits, special characters and upper and lower case, password strength is moderate', () => {
    expect(calculatePasswordStrength('Abce12!')).toBe('Moderate')
  })
  test('Check when password length is between 9 and 11, contains special characters and upper and lower case, password strength is moderate', () => {
    expect(calculatePasswordStrength('AbCDefghij!')).toBe('Moderate')
  })
  test('Check when password length is equal 12, upper and lower case, password strength is moderate', () => {
    expect(calculatePasswordStrength('AbCDefghijKL')).toBe('Moderate')
  })
  test('Check when password length is more than 12, contains upper and lower case, password strength is moderate', () => {
    expect(calculatePasswordStrength('AbCDefghijKLM')).toBe('Moderate')
  })
  test('Check when password length is equal 12, contains upper case and special characters, password strength is moderate', () => {
    expect(calculatePasswordStrength('ABCDEFGHIJK!')).toBe('Moderate')
  })
  test('Check when password length is equal 12, contains lower case and special characters, password strength is moderate', () => {
    expect(calculatePasswordStrength('abcdefghijk!')).toBe('Moderate')
  })
  test('Check when password length more than 12, contains upper case and special characters, password strength is moderate', () => {
    expect(calculatePasswordStrength('ABCDEFGHIJK!!')).toBe('Moderate')
  })
  test('Check when password length is more than 12, contains lower case and special characters, password strength is moderate', () => {
    expect(calculatePasswordStrength('abcdefghijk!!')).toBe('Moderate')
  })
  test('Check when password length is equal 12, contains lower case and digits, password strength is moderate', () => {
    expect(calculatePasswordStrength('abcdefghijk1')).toBe('Moderate')
  })
  test('Check when password length is equal 12, contains upper case and digits, password strength is moderate', () => {
    expect(calculatePasswordStrength('ABCDEFGHIJK1')).toBe('Moderate')
  })
  test('Check when password length is more than 12, contains lower case and digits, password strength is moderate', () => {
    expect(calculatePasswordStrength('abcdefghijk11')).toBe('Moderate')
  })
  test('Check when password length is more than 12, contains upper case and digits, password strength is moderate', () => {
    expect(calculatePasswordStrength('ABCDEFGHIJK11')).toBe('Moderate')
  })
})

describe('Password strength is strong', () => {
  test('Check when password length is equal 8, contains lower and upper case, digits and special characters, password strength is strong', () => {
    expect(calculatePasswordStrength('ABcd11!!')).toBe('Strong')
  })
  test('Check when password length is between 9 and 11, contains lower and upper case, digits and special characters, password strength is strong', () => {
    expect(calculatePasswordStrength('ABcd11!!22')).toBe('Strong')
  })
  test('Check when password length is equal 12, contains lower and upper case and digits, password strength is strong', () => {
    expect(calculatePasswordStrength('ABCDefgh1234')).toBe('Strong')
  })
  test('Check when password length is more than 12, contains lower and upper case and digits, password strength is strong', () => {
    expect(calculatePasswordStrength('ABCDefgh12345')).toBe('Strong')
  })
  test('Check when password length is equal 12, contains lower and upper case and special characters, password strength is strong', () => {
    expect(calculatePasswordStrength('ABCDefgh!!!!')).toBe('Strong')
  })
  test('Check when password length is more than 12, contains lower and upper case and special characters, password strength is strong', () => {
    expect(calculatePasswordStrength('ABCDefgh!!!!!')).toBe('Strong')
  })
  test('Check when password length is equal 12, contains lower case, special characters and digits, password strength is strong', () => {
    expect(calculatePasswordStrength('abcdef1234!!')).toBe('Strong')
  })
  test('Check when password length is more than 12, contains lower case, special characters and digits, password strength is strong', () => {
    expect(calculatePasswordStrength('abcdef1234!!!')).toBe('Strong')
  })
  test('Check when password length is equal 12, contains upper case, special characters and digits, password strength is strong', () => {
    expect(calculatePasswordStrength('ABCDEFG1234!!')).toBe('Strong')
  })
  test('Check when password length is more than 12, contains upper case, special characters and digits, password strength is strong', () => {
    expect(calculatePasswordStrength('ABCDEFG1234!!!')).toBe('Strong')
  })
  test('Check when password length is equal 12, contains lower and upper case, digits and special characters, password strength is strong', () => {
    expect(calculatePasswordStrength('ABCDefgh1234!!!!')).toBe('Strong')
  })
})
