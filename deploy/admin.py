from PyQt5 import QtWidgets
from designer import mainmenu, functions, deployform, help, addcourse, description, ipfsform, learnersform, nftform
import sys
import os

from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QWidget, QMessageBox, QApplication, QFileDialog, QErrorMessage, QSizePolicy, QVBoxLayout, QDialog
from PyQt5.QtGui import QIcon, QFont
from PyQt5.QtCore import QCoreApplication
 
class App(QtWidgets.QMainWindow, mainmenu.Ui_MainWindow):
    '''Форма главного окна'''

    def __init__(self):
        super().__init__()
        self.setupUi(self)
        ## self.setWindowIcon(QIcon('logo.png'))
        self.setWindowTitle('Система выдачи электронных сертификатов')
        self.pushButton.clicked.connect(self.functions)
        self.pushButton_2.clicked.connect(self.help)
        self.pushButton_3.clicked.connect(self.close)

    def closeEvent(self, event):
        reply = QMessageBox.question(self, 'Quit',
            "Are you sure to quit?", QMessageBox.Yes |
            QMessageBox.No, QMessageBox.No)
        if reply == QMessageBox.Yes:
            event.accept()
        else:
            event.ignore()

    def help(self):
        self.help_form = HelpApp()
        self.help_form.show()

    def functions(self):
        self.functions_form = FunctionsApp()
        self.functions_form.show()


class HelpApp(QtWidgets.QMainWindow, help.Ui_MainWindow):
    '''Форма помощи по работе программы'''

    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle('Справка')
        # self.setWindowIcon(QIcon('logo.png'))


class FunctionsApp(QtWidgets.QMainWindow, functions.Ui_MainWindow):
    '''Форма функций программной системы'''

    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle('Функции программы')
        # self.setWindowIcon(QIcon('logo.png'))
        self.pushButton.clicked.connect(self.deployform)
        self.pushButton_3.clicked.connect(self.addcourse)
        self.pushButton_2.clicked.connect(self.learnersform)
        self.pushButton_5.clicked.connect(self.description)
        self.pushButton_4.clicked.connect(self.ipfsform)
        self.pushButton_6.clicked.connect(self.nftform)

    def deployform(self):
        self.deploy_form = DeployApp()
        self.deploy_form.show()

    def addcourse(self):
        self.add_course = AddCourse()
        self.add_course.show()

    def learnersform(self):
        self.learners_form = LearnersForm()
        self.learners_form.show()

    def description(self):
        self.description_form = DescriptionForm()
        self.description_form.show()

    def ipfsform(self):
        self.ipfs_form = IpfsForm()
        self.ipfs_form.show()

    def nftform(self):
        self.nft_form = NftForm()
        self.nft_form.show()


class DeployApp(QtWidgets.QMainWindow, deployform.Ui_MainWindow):
    '''Форма развертывания смарт-контрактов в блокчейн-сети'''

    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle('Развертывание в блокчейн-сети')
        # self.setWindowIcon(QIcon('logo.png'))
        self.pushButton.clicked.connect(self.deployrun)

    def deployrun(self):
        name = self.lineEdit.text()
        abbr = self.lineEdit_2.text()
        os.system(f'brownie run scripts/deploy.py main {name} {abbr} --network rinkeby')


class AddCourse(QtWidgets.QMainWindow, addcourse.Ui_MainWindow):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle('Добавить новый курс')
        # self.setWindowIcon(QIcon('logo.png'))
        self.pushButton.clicked.connect(self.courseadd)
    
    def courseadd(self):
        name = self.lineEdit.text()
        os.system(f'brownie run scripts/add_course.py main {name} --network rinkeby')    


class LearnersForm(QtWidgets.QMainWindow, learnersform.Ui_MainWindow):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle('Редактирование списка учащихся')
        # self.setWindowIcon(QIcon('logo.png'))
        self.pushButton.clicked.connect(self.learner_add)
        self.pushButton_2.clicked.connect(self.learner_remove)

    def learner_add(self):
        name = self.lineEdit.text()
        address = self.lineEdit_4.text()
        os.system(f'brownie run scripts/add_learner.py main {address} {name} --network rinkeby')
    
    def learner_remove(self):
        name = self.lineEdit.text()
        address = self.lineEdit_4.text()
        os.system(f'brownie run scripts/remove_learner.py main {address} {name} --network rinkeby') 


class DescriptionForm(QtWidgets.QMainWindow, description.Ui_MainWindow):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle('Добавить описание сертификата')
        # self.setWindowIcon(QIcon('logo.png'))
        self.pushButton.clicked.connect(self.description_add)
    
    def description_add(self):
        course = self.lineEdit.text()
        address = self.lineEdit_2.text()
        begin = self.lineEdit_3.text()
        end = self.lineEdit_4.text()
        score = self.lineEdit_5.text()
        info = self.lineEdit_6.text()
        os.system(f'brownie run scripts/add_description.py main {address} {course} {begin} {end} {score} {info} --network rinkeby') 


class IpfsForm(QtWidgets.QMainWindow, ipfsform.Ui_MainWindow):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle('Добавить сертификат в IPFS')
        # self.setWindowIcon(QIcon('logo.png'))


class NftForm(QtWidgets.QMainWindow, nftform.Ui_MainWindow):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle('Создать NFT-сертификат')
        # self.setWindowIcon(QIcon('logo.png'))
        self.pushButton.clicked.connect(self.create_nft)
    
    def create_nft(self):
        course = self.lineEdit.text()
        address = self.lineEdit_2.text()
        ipfsAddr = self.lineEdit_3.text()
        os.system(f'brownie run scripts/create_nft.py main {address} {course} {ipfsAddr} --network rinkeby')


def main():
    app = QtWidgets.QApplication(sys.argv)
    window = App()
    window.show()
    app.exec_()

if __name__ == '__main__':
    main()
