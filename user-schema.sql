


SELECT COUNT(status_perkawinan) AS TotalBelumMenikah FROM penduduk WHERE status_perkawinan = 'Belum Menikah'
SELECT COUNT(status_perkawinan) AS TotalSudahMenikah FROM penduduk WHERE status_perkawinan = 'Sudah Menikah'
SELECT COUNT(status_perkawinan) AS TotalCeraiHidup FROM penduduk WHERE status_perkawinan = 'Cerai Hidup'
SELECT COUNT(status_perkawinan) AS TotalCeraiMati FROM penduduk WHERE status_perkawinan = 'Cerai Mati'

SELECT COUNT(status_perkawinan) AS TotalPerkawinan FROM penduduk


#QUERY SUDAH NIKAH !
SELECT COUNT(jenis_kelamin) AS TotalBelumMenikah FROM penduduk WHERE status_perkawinan = 'Sudah Menikah'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaSudahMenikah FROM penduduk WHERE status_perkawinan = 'Sudah Menikah'
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaSudahMenikah FROM penduduk WHERE status_perkawinan = 'Sudah Menikah'

#--------------------------------------------------------------------------------------------------------PISAH



#Belum/Tidak Pernah Sekolah. 
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend1 FROM penduduk WHERE pendidikan = 'Belum/Tidak Pernah Sekolah'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend1 FROM penduduk WHERE pendidikan = 'Belum/Tidak Pernah Sekolah'
SELECT COUNT(jenis_kelamin) AS TotalPend1 FROM penduduk WHERE pendidikan  = 'Belum/Tidak Pernah Sekolah'

#Belum/Tidak Tamat SD/SDLB/MI/Paket A. 
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend2 FROM penduduk WHERE pendidikan = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend2 FROM penduduk WHERE pendidikan = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A'
SELECT COUNT(jenis_kelamin) AS TotalPend2 FROM penduduk WHERE pendidikan  = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A'

#SD/SDLB/MI/Paket A. 
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend3 FROM penduduk WHERE pendidikan = 'SD/SDLB/MI/Paket A'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend3 FROM penduduk WHERE pendidikan = 'SD/SDLB/MI/Paket A'
SELECT COUNT(jenis_kelamin) AS TotalPend3 FROM penduduk WHERE pendidikan  = 'SD/SDLB/MI/Paket A'

#SMP/SMPLB/MTs/Paket B. 
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend4 FROM penduduk WHERE pendidikan = 'SMP/SMPLB/MTs/Paket B'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend4 FROM penduduk WHERE pendidikan = 'SMP/SMPLB/MTs/Paket B'
SELECT COUNT(jenis_kelamin) AS TotalPend4 FROM penduduk WHERE pendidikan  = 'SMP/SMPLB/MTs/Paket B'

#SMA/SMLB/MA/SMK/MAK/paket C. 
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend5 FROM penduduk WHERE pendidikan = 'SMA/SMLB/MA/SMK/MAK/paket C'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend5 FROM penduduk WHERE pendidikan = 'SMA/SMLB/MA/SMK/MAK/paket C'
SELECT COUNT(jenis_kelamin) AS TotalPend5 FROM penduduk WHERE pendidikan  = 'SMA/SMLB/MA/SMK/MAK/paket C'


#DI/DII/DIII. 
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend6 FROM penduduk WHERE pendidikan = 'DI/DII/DIII'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend6 FROM penduduk WHERE pendidikan = 'DI/DII/DIII'
SELECT COUNT(jenis_kelamin) AS TotalPend6 FROM penduduk WHERE pendidikan  = 'DI/DII/DIII'

#DIV/S1. 
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend7 FROM penduduk WHERE pendidikan = 'DIV/S1'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend7 FROM penduduk WHERE pendidikan = 'DIV/S1'
SELECT COUNT(jenis_kelamin) AS TotalPend7 FROM penduduk WHERE pendidikan  = 'DIV/S1'

#S2. 
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend8 FROM penduduk WHERE pendidikan = 'S2'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend8 FROM penduduk WHERE pendidikan = 'S2'
SELECT COUNT(jenis_kelamin) AS TotalPend8 FROM penduduk WHERE pendidikan  = 'S2'

#S3. 
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend9 FROM penduduk WHERE pendidikan = 'S3'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend9 FROM penduduk WHERE pendidikan = 'S3'
SELECT COUNT(jenis_kelamin) AS TotalPend9 FROM penduduk WHERE pendidikan  = 'S3'


#######################################################-------------------------------PISAH


## QUERY PEKERJAAN !!!!!!

#Belum Bekerja
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja1 FROM penduduk WHERE pekerjaan = 'Belum Bekerja'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja1 FROM penduduk WHERE pekerjaan = 'Belum Bekerja'
SELECT COUNT(jenis_kelamin) AS TotalKerja1  FROM penduduk WHERE pekerjaan  = 'Belum Bekerja'

#Mengurus Rumah Tangga
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja2 FROM penduduk WHERE pekerjaan = 'Mengurus Rumah Tangga'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja2 FROM penduduk WHERE pekerjaan = 'Mengurus Rumah Tangga'
SELECT COUNT(jenis_kelamin) AS TotalKerja2  FROM penduduk WHERE pekerjaan  = 'Mengurus Rumah Tangga'

#Pelajar/Mahasiswa
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja3 FROM penduduk WHERE pekerjaan = 'Pelajar/Mahasiswa'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja3 FROM penduduk WHERE pekerjaan = 'Pelajar/Mahasiswa'
SELECT COUNT(jenis_kelamin) AS TotalKerja3  FROM penduduk WHERE pekerjaan  = 'Pelajar/Mahasiswa'

#Pensiunan
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja4 FROM penduduk WHERE pekerjaan = 'Pensiunan'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja4 FROM penduduk WHERE pekerjaan = 'Pensiunan'
SELECT COUNT(jenis_kelamin) AS TotalKerja4  FROM penduduk WHERE pekerjaan  = 'Pensiunan'

#PNS
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja5 FROM penduduk WHERE pekerjaan = 'PNS'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja5 FROM penduduk WHERE pekerjaan = 'PNS'
SELECT COUNT(jenis_kelamin) AS TotalKerja5  FROM penduduk WHERE pekerjaan  = 'PNS'

#POLRI
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja6 FROM penduduk WHERE pekerjaan = 'POLRI'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja6 FROM penduduk WHERE pekerjaan = 'POLRI'
SELECT COUNT(jenis_kelamin) AS TotalKerja6  FROM penduduk WHERE pekerjaan  = 'POLRI'

#TNI
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja7 FROM penduduk WHERE pekerjaan = 'TNI'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja7 FROM penduduk WHERE pekerjaan = 'TNI'
SELECT COUNT(jenis_kelamin) AS TotalKerja7  FROM penduduk WHERE pekerjaan  = 'TNI'

#WIRASWASTA
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja8 FROM penduduk WHERE pekerjaan = 'WIRASWASTA'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja8 FROM penduduk WHERE pekerjaan = 'WIRASWASTA'
SELECT COUNT(jenis_kelamin) AS TotalKerja8  FROM penduduk WHERE pekerjaan  = 'WIRASWASTA'

#SWASTA
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja9 FROM penduduk WHERE pekerjaan = 'SWASTA'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja9 FROM penduduk WHERE pekerjaan = 'SWASTA'
SELECT COUNT(jenis_kelamin) AS TotalKerja9  FROM penduduk WHERE pekerjaan  = 'SWASTA'

#Pegawai BUMN
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja10 FROM penduduk WHERE pekerjaan = 'Pegawai BUMN'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja10 FROM penduduk WHERE pekerjaan = 'Pegawai BUMN'
SELECT COUNT(jenis_kelamin) AS TotalKerja10  FROM penduduk WHERE pekerjaan  = 'Pegawai BUMN'

#Pekerja Lepas
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja11 FROM penduduk WHERE pekerjaan = 'Pekerja Lepas'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja11 FROM penduduk WHERE pekerjaan = 'Pekerja Lepas'
SELECT COUNT(jenis_kelamin) AS TotalKerja11  FROM penduduk WHERE pekerjaan  = 'Pekerja Lepas'

#Petani/peternak/pekebun
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja12 FROM penduduk WHERE pekerjaan = 'Petani/peternak/pekebun'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja12 FROM penduduk WHERE pekerjaan = 'Petani/peternak/pekebun'
SELECT COUNT(jenis_kelamin) AS TotalKerja12  FROM penduduk WHERE pekerjaan  = 'Petani/peternak/pekebun'

#Nelayan
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja13 FROM penduduk WHERE pekerjaan = 'Nelayan'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja13 FROM penduduk WHERE pekerjaan = 'Nelayan'
SELECT COUNT(jenis_kelamin) AS TotalKerja13  FROM penduduk WHERE pekerjaan  = 'Nelayan'

#Industri
SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja14 FROM penduduk WHERE pekerjaan = 'Industri'
SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja14 FROM penduduk WHERE pekerjaan = 'Industri'
SELECT COUNT(jenis_kelamin) AS TotalKerja14  FROM penduduk WHERE pekerjaan  = 'Industri'



SELECT COUNT(id_Usaha) AS Tmikro from umkm WHERE omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta' OR omset = 'Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta'

SELECT COUNT(id_Usaha) AS Tkecil from umkm WHERE omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.500 Juta' OR omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset = 'Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta'

SELECT COUNT(id_Usaha) AS Tmenengah from umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar'