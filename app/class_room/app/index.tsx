import React, { useState, useEffect } from 'react';
import { StyleSheet, Platform, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

interface LoginScreenProps {
  onLogin?: (credentials: { email: string; password: string } | { phoneNumber: string; otp: string }) => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isOtpLogin, setIsOtpLogin] = useState(false); 

  const [fontsLoaded] = useFonts({
    Sarabun: require('../assets/fonts/Sarabun-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  const handleLogin = async () => {
    if (isOtpLogin) {
      if (!phoneNumber || !otp) {
        setError('Please fill in all fields');
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        if (onLogin) {
          onLogin({ phoneNumber, otp });
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000)); 
          Alert.alert('Success', 'OTP Login successful!');
        }
      } catch (err) {
        setError('An error occurred during OTP login');
      } finally {
        setIsLoading(false);
      }
    } else {
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }

      if (!email.includes('@')) {
        setError('Please enter a valid email');
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        if (onLogin) {
          onLogin({ email, password });
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000)); 
          if (email === 'demo@example.com' && password === 'password') {
            Alert.alert('Success', 'Login successful!');
          } else {
            setError('Invalid email or password');
          }
        }
      } catch (err) {
        setError('An error occurred during login');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={{ fontFamily: 'Sarabun', fontSize: 24 }} type="title">
          ระบบจัดการวิชาเรียน
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.formContainer}>
        <TouchableOpacity onPress={() => setIsOtpLogin(!isOtpLogin)}>
          <ThemedText type="defaultSemiBold" style={styles.toggleText}>
            {isOtpLogin ? 'Switch to E-Mail/Password Login' : 'Switch to OTP Login'}
          </ThemedText>
        </TouchableOpacity>

        {isOtpLogin ? (
          <>
            <ThemedView style={styles.inputContainer}>
              <ThemedText type="subtitle">Phone Number</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChangeText={(text) => {
                  setPhoneNumber(text);
                  setError('');
                }}
                keyboardType="phone-pad"
              />
            </ThemedView>
            <ThemedView style={styles.inputContainer}>
              <ThemedText type="subtitle">OTP</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="Enter OTP"
                value={otp}
                onChangeText={(text) => {
                  setOtp(text);
                  setError('');
                }}
                keyboardType="numeric"
              />
            </ThemedView>
          </>
        ) : (
          <>
            <ThemedView style={styles.inputContainer}>
              <ThemedText type="subtitle">อีเมล</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="โปรดกรอกอีเมลของคุณ"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setError('');
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="subtitle">รหัสผ่าน</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="โปรดกรอกรหัสผ่านของคุณ"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setError('');
                }}
                secureTextEntry
              />
            </ThemedView>
          </>
        )}

        {error ? (
          <ThemedView style={styles.errorContainer}>
            <ThemedText style={styles.errorText}>{error}</ThemedText>
          </ThemedView>
        ) : null}

        <TouchableOpacity
          style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <ThemedText style={styles.loginButtonText}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </ThemedText>
        </TouchableOpacity>

        <ThemedView style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <ThemedText type="defaultSemiBold" style={styles.forgotPasswordText}>
              Forgot Password?
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.signupContainer}>
          <ThemedText>Don't have an account? </ThemedText>
          <TouchableOpacity>
            <ThemedText type="defaultSemiBold" style={styles.signupText}>
              Sign Up
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    fontFamily: 'Sarabun',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 32,
  },
  formContainer: {
    gap: 16,
    padding: 16,
  },
  inputContainer: {
    gap: 8,
  },
  input: {
    backgroundColor: Platform.select({
      ios: '#F5F5F5',
      android: '#FFFFFF',
      default: '#F5F5F5',
    }),
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#59BDFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorContainer: {
    backgroundColor: '#FFE5E5',
    padding: 12,
    borderRadius: 8,
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 14,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  forgotPasswordText: {
    color: '#A1CEDC',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  signupText: {
    color: '#A1CEDC',
  },
  toggleText: {
    color: '#A1CEDC',
    textAlign: 'center',
    marginBottom: 16,
  },
});

