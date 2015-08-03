def ceasar(string, shift)
    ascii = string.chars.map(&:ord)
    shifted = ascii.map { |c| c + shift }
    shifted.map { |c| c.chr }.join
end
