import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  FlexProps,
  HStack,
  useColorModeValue as mode,
  useDisclosure,
  VisuallyHidden,
  Link
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useAuthUser } from '../../../src/hooks/use-auth-user'
import { useClient } from '../../../src/hooks/use-client'
import { AuthService } from '../../../src/service/auth-service'
import { SignInPopup } from '../../common/SignInPopup'
import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { NavMenu } from './NavMenu'
import { Submenu } from './Submenu'
import { ToggleButton } from './ToggleButton'
import { links } from './_data'

const MobileNavContext = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex align="center" justify="space-between" className="nav-content__mobile" {...props}>
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" mx="auto">
          <Logo h="24px" iconColor="blue.400" />
        </Box>
        <Box visibility={{ base: 'hidden', sm: 'visible' }}>
          <Button as="a" colorScheme="blue">
            Get Started
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          ),
        )}
        <Button colorScheme="blue" w="full" size="lg" mt="5">
          Try for free
        </Button>
      </NavMenu>
    </>
  )
}

const DesktopNavContent = (props: FlexProps) => {

  const { isShowLogin, setIsShowLogin } = useClient()
  const authUser = useAuthUser()
  const isLoggedin = authUser?.isAnonymous === false

  const router = useRouter()

  React.useEffect(() => {
    const handleShowLogin = async () => {
      try {
        const query = router.query
        const showSignIn = query.showSignIn
        if (showSignIn === 'true') {
          await AuthService.signOut()
          setIsShowLogin(true)
        }
      } catch (error) { }
    }
    handleShowLogin()
  }, [router.query])

  return (
    <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
      <Box as="a" href="#" rel="home" padding={8}>
        <VisuallyHidden>Envelope</VisuallyHidden>
        <Logo h="6" iconColor="blue.500" />
      </Box>
      {/* <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack> */}

      <HStack spacing="8" minW="240px" justify="space-between">
        {isLoggedin && (
          <Box as="a" href="/MyPage" color={mode('blue.600', 'blue.300')} fontWeight="bold" >
            マイページ
          </Box>
        )}
        {!isLoggedin && (
          <>
            <Button as="a" href="/MyPage" color={mode('blue.600', 'blue.300')} fontWeight="bold" onClick={() => setIsShowLogin(true)}>
              ログイン
            </Button>
            <Button as="a" href="#" colorScheme="blue" fontWeight="bold" onClick={() => setIsShowLogin(true)}>
              無料新規登録
            </Button>
          </>
        )}
      </HStack>
      {isShowLogin && <SignInPopup />}
    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}
