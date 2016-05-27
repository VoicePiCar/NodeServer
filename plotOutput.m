fileID = fopen('output.txt','r');
formatSpec = '%f';

figure;
hold('all');

tline = fgetl(fileID);
colorOrder  = ['b','r','c','y','k','g'];
colorIndex  = 1;
Fs = 8000;
while ischar(tline)
    FFTm = str2num(tline);
    N = size(FFTm,2);
    bin_vals = [0 : N - 1];
    frec = bin_vals*Fs/N;
   
    plot(frec(1:ceil(N/2)), FFTm(1:ceil(N/2)), ColorOrder(ColorIndex))
    
    tline = fgetl(fileID);
    
    ColorIndex = ColorIndex + 1;
    if ColorIndex > size(ColorOrder,2)
        ColorIndex  = 1;
    end
end
fclose(fileID);